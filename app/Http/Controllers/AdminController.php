<?php

namespace App\Http\Controllers;

use App\Models\Receipt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index() {
        return Inertia::render('AdminDashboard', [
            'receipts' => Receipt::all()
        ]);
    }

    public function approve($id) {
        $receiptData = Receipt::where('unique_id', $id)->first();

        if($receiptData->status == 'Inactive') {
            $receipt = Receipt::where('unique_id', $id)->first();
            $receipt->status = 'Active';
            $receipt->approved_by = Auth::user()->name;
            $receipt->save();
        }

        if($receiptData->status == 'Active') {
            $receipt = Receipt::where('unique_id', $id)->first();
            $receipt->status = 'Inactive';
            $receipt->approved_by = Auth::user()->name;
            $receipt->save();
        }

        return redirect('admin-dashboard');
    }
}
