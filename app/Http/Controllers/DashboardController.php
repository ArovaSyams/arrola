<?php

namespace App\Http\Controllers;

use App\Models\Receipt;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        

        return Inertia::render('Dashboard', [
            'receipts' => Receipt::where('user_id', Auth::user()->id)->get(),
            'auth' => Auth::user(),
            'count' => Receipt::where('user_id', Auth::user()->id)->count()
        ]);
    }
    
    public function receipt() {
        return Inertia::render('Receipt', [
            'receipts' => Receipt::where('user_id', Auth::user()->id)->get(),
            'auth' => Auth::user()
        ]);
    }
}
