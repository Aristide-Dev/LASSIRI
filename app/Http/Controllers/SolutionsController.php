<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class SolutionsController extends Controller
{
    
    public function index(): Response
    {
        return Inertia::render('Solutions/Index');
    }

    public function transactionsFinancieres(): Response
    {
        return Inertia::render('Solutions/TransactionsFinancieres');
    }

    public function paiements(): Response
    {
        return Inertia::render('Solutions/Paiements');
    }

    public function transportReservation(): Response
    {
        return Inertia::render('Solutions/TransportReservation');
    }

    public function commandeLivraison(): Response
    {
        return Inertia::render('Solutions/CommandeLivraison');
    }

    public function colisCourriers(): Response
    {
        return Inertia::render('Solutions/ColisCourriers');
    }
}
