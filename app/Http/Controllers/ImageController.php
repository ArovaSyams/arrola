<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Http\Requests\StoreImageRequest;
use App\Http\Requests\UpdateImageRequest;
use App\Models\Receipt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Image::create([
            'receipt_id' => $request->id,
            'image' => $request->file('image')->store('image')
        ]);

        return redirect()->back();
    }

    public function editCover(Request $request) {
        $receipt = Receipt::where('unique_id', $request->id)->first();
        // dd($receipt);
        Storage::delete($receipt->cover);
        $receipt->cover = $request->file('cover')->store('image');
        $receipt->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateImageRequest $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // dump($id);
        $image = Image::where('id', $id)->first();
        // dd($image);
        
        Storage::delete($image->image);
        
        $image->delete();

        return redirect()->back();
    }
}
