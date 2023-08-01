<?php

namespace App\Http\Controllers;

use App\Models\VisitedPages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VisitedController extends Controller
{
    public function store(Request $request) {
        // dd($request->authUserId);
        // $authUser = Auth::user()->id;

        // $visitedPage = VisitedPages::where('user_id', $request->authUserId)->where('receipt_id', $request->receiptId)->first();
        // dd(!$visitedPage);
        // if(!$visitedPage) {
        VisitedPages::create([
            'user_id' => $request->authUserId,
            'receipt_id' => $request->receiptId
        ]);
        // }
        
        return redirect()->back();
    }
}
