<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class PartenariatController extends Controller
{
    
    public function index(): Response
    {
        return Inertia::render('Partenariat/Index');
    }
    
    public function chauffeur(): Response
    {
        return Inertia::render('Partenariat/Chauffeur');
    }
    
    public function livreur(): Response
    {
        return Inertia::render('Partenariat/Livreur');
    }
    
    public function marchandPaiement(): Response
    {
        return Inertia::render('Partenariat/MarchandPaiement');
    }
    
    public function marchandLivraison(): Response
    {
        return Inertia::render('Partenariat/MarchandLivraison');
    }
    
}
