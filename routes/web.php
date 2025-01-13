<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\SolutionsController;
use App\Http\Controllers\PartenariatController;

/*
|--------------------------------------------------------------------------
| Routes Publiques
|--------------------------------------------------------------------------
*/

// Page d'accueil
Route::get('/', [WelcomeController::class, 'welcome'])->name('welcome');

// Centre d'aide
Route::get('/centre-aide', [WelcomeController::class, 'helpCenter'])->name('centre.aide');
Route::get('/comment-ca-marche', [WelcomeController::class, 'howToWork'])->name('comment.ca.marche');
Route::get('/a-propos', [WelcomeController::class, 'about'])->name('a.propos');

/*
|--------------------------------------------------------------------------
| Routes des Solutions
|--------------------------------------------------------------------------
*/

Route::prefix('solutions')->name('solutions.')->group(function () {
    // Page principale des solutions
    Route::get('/', [SolutionsController::class, 'index'])->name('index');
    
    // Services de paiement
    Route::get('/paiements', [SolutionsController::class, 'paiements'])->name('paiements');
    
    // Transactions financières
    Route::get('/transactions-financieres', [SolutionsController::class, 'transactionsFinancieres'])->name('transactions.finances');
    
    // Transport et réservation
    Route::get('/transport-et-reservation', [SolutionsController::class, 'transportReservation'])->name('transport.reservation');
    
    // Commande et livraison
    Route::get('/commande-et-livraison', [SolutionsController::class, 'commandeLivraison'])->name('commande.livraison');
    
    // Colis et courriers
    Route::get('/colis-et-courriers', [SolutionsController::class, 'colisCourriers'])->name('colis.courriers');
});

/*
|--------------------------------------------------------------------------
| Routes du Partenariat
|--------------------------------------------------------------------------
*/

Route::prefix('partenariat')->name('partenariat.')->group(function () {
    // Page principale du partenariat
    Route::get('/', [PartenariatController::class, 'index'])->name('index');
    
    // Espace chauffeur
    Route::get('/chauffeur', [PartenariatController::class, 'chauffeur'])->name('chauffeur');
    
    // Espace livreur
    Route::get('/livreur', [PartenariatController::class, 'livreur'])->name('livreur');
    
    // Marchands et paiements
    Route::get('/marchand-et-paiement', [PartenariatController::class, 'marchandPaiement'])->name('marchand.paiement');
    
    // Marchands et livraisons
    Route::get('/marchand-et-livraison', [PartenariatController::class, 'marchandLivraison'])->name('marchand.livraison');
});

/*
|--------------------------------------------------------------------------
| Routes Authentifiées
|--------------------------------------------------------------------------
*/

// Tableau de bord
Route::get('/tableau-de-bord', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('tableau-de-bord');

// Routes du profil utilisateur
Route::middleware('auth')->group(function () {
    Route::get('/profil', [ProfileController::class, 'edit'])->name('profil.edit');
    Route::patch('/profil', [ProfileController::class, 'update'])->name('profil.update');
    Route::delete('/profil', [ProfileController::class, 'destroy'])->name('profil.destroy');
});

// Inclusion des routes d'authentification
require __DIR__.'/auth.php';