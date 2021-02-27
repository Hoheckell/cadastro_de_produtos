<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Antonrom\ModelChangesHistory\Traits\HasChangesHistory;

class Produto extends Model
{
    use HasChangesHistory;
    public $timestamps = false;
    protected $table = 'products';
    protected $fillable = [
        'nome',
        'preco',
        'quantidade'
    ];

    public function quantidades(){
        return $this->hasMany(Quantidades::class,'produto_id','id');
    }
}
