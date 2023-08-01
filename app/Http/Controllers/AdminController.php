<?php

namespace App\Http\Controllers;

use App\Models\Receipt;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index() {

        return Inertia::render('AdminDashboard', [
            'receipts' => Receipt::count(),
            'users' => User::where('role', 'user')->count(),
            'auth' => Auth::user()
        ]);
    }

    public function receiptRequest() {
        return Inertia::render('ReceiptRequest', [
            'receipts' => Receipt::all(),
            'users' => User::where('role', 'user')->get(),
            'auth' => Auth::user()
        ]);
    }

    public function userList() {
        return Inertia::render('UserList', [
            'users' => User::where('role', 'user')->get(),
            'auth' => Auth::user()
        ]);
    }

    public function approve($id) {
        $receiptData = Receipt::where('unique_id', $id)->first();

        if($receiptData->status == 'Inactive') {
            $receipt = Receipt::where('unique_id', $id)->first();
            $receipt->status = 'Active';
            $receipt->approved_at = Carbon::now();
            $receipt->approved_by = Auth::user()->first_name;
            $receipt->save();
        }

        if($receiptData->status == 'Active') {
            $receipt = Receipt::where('unique_id', $id)->first();
            $receipt->status = 'Inactive';
            $receipt->approved_by = Auth::user()->first_name;
            $receipt->save();
        }

        return redirect('receipt-request');
    }
}
