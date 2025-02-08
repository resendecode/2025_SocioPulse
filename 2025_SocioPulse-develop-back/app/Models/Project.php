<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model {
    use HasFactory;
// this table protects the model from masive assignations
    protected $fillable = [
        'name',
        'department',
        'city',
        'description'
    ];
}

