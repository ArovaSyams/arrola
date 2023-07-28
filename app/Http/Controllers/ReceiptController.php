<?php

namespace App\Http\Controllers;

use App\Models\Receipt;
use App\Http\Requests\StoreReceiptRequest;
use App\Http\Requests\UpdateReceiptRequest;
use App\Models\Category;
use App\Models\Image;
use App\Models\Tag;
use App\Models\TagList;
use App\Models\User;
use Illuminate\Console\Application;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use PHPUnit\Metadata\Covers;

class ReceiptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('Home', [
            'receipts' => Receipt::all(),
            'images' => Image::distinct('receipt_id')->get(),
            // 'canLogin' => Route::has('login'),
            // 'canRegister' => Route::has('register'),
            // 'laravelVersion' => Application::VERSION,
            // 'phpVersion' => PHP_VERSION,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateReceipt', [
            'tags' => TagList::all(),
            'categories' => Category::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $uniqId = uniqid();
        
        Receipt::create([
            'unique_id' => $uniqId, 
            'user_id' => Auth::user()->id,
            'name' => $request->name,
            'description' => $request->description,
            'category' => $request->category,
            'ingredient_amount' => $request->ingredient_amount,
            'make_time' => $request->make_time,
            'ingredient' => $request->ingredient,
            'cover' => $request->file('cover')->store('image')
        ]);

        if($request->file('image')) {
            foreach($request->image as $img) {
                $image = new Image();
                $image->image = $img->store('image');
                $image->receipt_id = $uniqId;
                $image->save();
            }
        }

        if($request->tag) {
            foreach($request->tag as $tg) {
                $tag = new Tag();
                $tag->tag = $tg['tag'];
                $tag->receipt_id = $uniqId;
                $tag->save();
            }
        }

        return redirect('dashboard');

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $receiptDetail = Receipt::where('unique_id', $id)->first();
        $user = User::where('id', $receiptDetail->user_id)->first();

        return Inertia::render('ReceiptDetail', [
            'authUser' => Auth::user()->id,
            'user' => $user,
            'receipt' => $receiptDetail,
            'tags' => Tag::where('receipt_id', $receiptDetail->unique_id)->get(),
            'images' => Image::where('receipt_id', $receiptDetail->unique_id)->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $receipt = Receipt::where('unique_id', $id)->first();
        $images = Image::where('receipt_id', $id)->get();
        $tags = Tag::where('receipt_id', $id)->get();

        return Inertia::render('EditReceipt', [
            'receipt' => $receipt,
            'categories' => Category::all(),
            'tagList' => TagList::all(),
            'images' => $images,
            'tags' => $tags,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // dd($request->name);
        $cover = Receipt::where('unique_id', $id)->first();
        // dd($cover);
        // Storage::delete($cover->cover);
        
        Receipt::where('unique_id', $id)->update([
            'name' => $request->name,
            'description' => $request->description,
            'category' => $request->category,
            'ingredient_amount' => $request->ingredient_amount,
            'make_time' => $request->make_time,
            'ingredient' => $request->ingredient,
            // 'cover' => $request->file('cover')->store('image')
        ]);


        // $cover->cover = $request->file('cover')->store('image');
        // $cover->save();

        // Receipt::where('unique_id', $id)->update([
        //     'cover' => $request->file('cover')->store('image')
        // ]);
        if($request->cover) {



        }
        
        // update Tag
        $existingTag = Tag::where('receipt_id', $id)->get();
        if($request->tag) {
            foreach($existingTag as $exTag) {
                $dltTag = Tag::where('tag', $exTag->tag)->first();
                $dltTag->delete();
            }
            foreach($request->tag as $tg) {
                $tag = new Tag();
                $tag->tag = $tg['tag'];
                $tag->receipt_id = $id;
                $tag->save();
            }
        }

        // update image
        $existingImage = Image::where('receipt_id', $id)->get();
        if($request->file('image')) {
            foreach($existingImage as $exImg) {
                Storage::delete($exImg->image);
                $exImg->delete();
            }

            foreach($request->image as $img) {
                $image = new Image();
                $image->image = $img->store('image');
                $image->save();
            }
        }

        return redirect('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {   
        $receipt = Receipt::where('unique_id', $id)->first();
        $images = Image::where('receipt_id', $id)->get();
        $tags = Tag::where('receipt_id', $id)->get();

        if($images) {
            foreach($images as $img) {
                Storage::delete($img->image);
                $img->delete();
            }
        }

        if($tags) {
            foreach($tags as $tag) {
                $tag->delete();
            }
        }

        $receipt->delete();

        return redirect('dashboard');
    }
}
