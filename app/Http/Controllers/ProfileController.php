<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index($id) {
        // dd(User::where('id', $id)->first());
        return Inertia::render('Profile', [
            'user' => User::where('id', $id)->first(),
            'auth' => Auth::user()
        ]);
    }
 
    public function myProfile() {
        return Inertia::render('MyProfile', [
            'auth' => Auth::user()
        ]);
    }

    public function update(Request $request, $id) {
        // dd($request->image);
        // dd($request);
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone' => 'required',
        ]);

        if($request->file('image')) {
            
            $user = User::where('id', $id)->first();
            if($user->image != 'default.jpg') {
                Storage::delete($user->image);
            }
            $user->image = $request->file('image')->store('image');
            $user->save();
        }

        User::where('id', $id)->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'birth_date' => $request->birth_date,
            'address' => $request->address,
            'city' => $request->city,
            'state' => $request->state,
            'zip_code' => $request->zip_code,
            'country' => $request->country,
        ]);

        return Inertia::render('profile/' . $id);
    }
}
