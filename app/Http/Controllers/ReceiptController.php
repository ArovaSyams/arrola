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
use App\Models\VisitedPages;
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
            'receipts' => Receipt::where('status', 'active')->get(),
            'images' => Image::distinct('receipt_id')->get(),
            'user' => User::all(),
            'auth' => Auth::user()
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
        if($request->file('image') && count($request->file('image')) > 5 && count($request->tag) > 5) {
            return redirect()->back()->with('message', 'Image & Tags cant contain more than 5');
        }
        if($request->file('image') && count($request->file('image')) > 5) {
            return redirect()->back()->with('message', 'Image cant contain more than 5');
        }
        if(count($request->tag) > 5) {
            return redirect()->back()->with('message', 'Tag cant more than 5 ');
        }
        $uniqId = uniqid();
        
        $request->validate([
            'name' => 'required|unique:receipts,name',
            'description' => 'required',
            'category' => 'required',
            'ingredient_amount' => 'required',
            'make_time' => 'required',
            'ingredient' => 'required',
            'cover' => 'required|image',
            'image' => 'required',
            'tag' => 'required'
        ]);

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

        return redirect('receipt');

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        
        $idName = str_replace('-', ' ', $id);
        $receiptDetail = Receipt::where('name', $idName)->first();

        if(Auth::user()) {
            if($receiptDetail->status == 'Inactive' && Auth::user()->role != 'admin') {
                return redirect()->back();
            }
        } else if ($receiptDetail->status == 'Inactive') {
            return redirect()->back();
        }

        $user = User::where('id', $receiptDetail->user_id)->first();
        $auth = ''; 
        if (Auth::user()) {
            $auth = Auth::user()->id;
        }
        return Inertia::render('ReceiptDetail', [
            'authUser' => $auth,
            'user' => $user,
            'receipt' => $receiptDetail,
            'tags' => Tag::where('receipt_id', $receiptDetail->unique_id)->get(),
            'images' => Image::where('receipt_id', $receiptDetail->unique_id)->get(),
            'visited' => VisitedPages::where('user_id', $auth)->where('receipt_id', $receiptDetail->unique_id)->first(),
            'visitedData' => VisitedPages::count(),
            'isAuth' => Auth::user()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $replaceStr = str_replace('-', ' ', $id);
        $receiptId = Receipt::where('name', $replaceStr)->first();
        // dd($receiptId->unique_id);
        $receipt = Receipt::where('unique_id', $receiptId->unique_id)->first();
        $images = Image::where('receipt_id', $receiptId->unique_id)->get();
        $tags = Tag::where('receipt_id', $receiptId->unique_id)->get();

        return Inertia::render('EditReceipt', [
            'receipt' => $receipt,
            'categories' => Category::all(),
            'tagList' => TagList::all(),
            'images' => $images,
            'tags' => $tags,
            'auth' => Auth::user()
        ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        
        if(count($request->tag) > 5) {
            return redirect()->back()->with('message', "Tag cant more than 5");
        }
        // dd($request);
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'category' => 'required',
            'ingredient_amount' => 'required',
            'make_time' => 'required',
            'ingredient' => 'required',
        ]);

        
        Receipt::where('unique_id', $id)->update([
            'name' => $request->name,
            'description' => $request->description,
            'category' => $request->category,
            'ingredient_amount' => $request->ingredient_amount,
            'make_time' => $request->make_time,
            'ingredient' => $request->ingredient,
        ]);

        // if status is active
        $isActive = Receipt::where('unique_id', $id)->first();
        if($isActive->status === 'Active') {
            $receipt = $isActive;
            $receipt->status = 'Inactive';
            $receipt->save();
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

        return redirect('receipt');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {   
        $receipt = Receipt::where('unique_id', $id)->first();
        $images = Image::where('receipt_id', $id)->get();
        $tags = Tag::where('receipt_id', $id)->get();

        if($receipt->cover) {
            Storage::delete($receipt->cover);
        }

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

        return redirect()->back();
    }
}
