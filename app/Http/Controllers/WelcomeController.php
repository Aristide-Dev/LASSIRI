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

    public function insideLassiri(): Response
    {
        return Inertia::render('InsideLassiri');
    }

    public function agences(): Response
    {
        return Inertia::render('Agences');
    }

    public function carriere(): Response
    {
        return Inertia::render('Carriere');
    }

    public function investisseurs(): Response
    {
        return Inertia::render('Investisseurs');
    }

    public function tutoriel()
    {
        return Inertia::render('Help/Tutorial');
    }

    public function faq()
    {
        return Inertia::render('Help/FAQ');
    }

    public function privacyPolicy()
    {
        return Inertia::render('Help/PrivacyPolicy');
    }

    public function termsConditions()
    {
        return Inertia::render('Help/TermsConditions');
    }
}
