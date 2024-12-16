<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function welcome(): Response
    {
        return Inertia::render('Welcome');
    }

    public function helpCenter(): Response
    {
        return Inertia::render('HelpCenter');
    }

    public function howToWork(): Response
    {
        return Inertia::render('HowToWork');
    }

    public function about(): Response
    {
        return Inertia::render('About');
    }
}
