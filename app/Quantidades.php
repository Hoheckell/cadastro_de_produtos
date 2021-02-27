<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quantidades extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'produto_id',
        'quantidade_antes',
        'quantidade_depois'
    ];
    protected $table = 'quantities_history';

    public function produtos(){
        $this->belongsTo(Produto::class,'produto_id');
    }

}
