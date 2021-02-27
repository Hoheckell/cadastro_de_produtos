<?php

namespace App\Http\Controllers;

use App\Produto;
use App\Quantidades;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Validator;

class ProdutoController extends Controller
{
    public function index()
    {
        $produtos = Produto::all()->toArray();
        return array_reverse($produtos);
    }

    public function store(Request $request)
    {
        try {
            foreach ($request->all() as $p) {
                Produto::create($p);
            }
        }catch (\Exception $e){
            Log::error($e->getMessage()." ".$e->getFile()." ".$e->getLine());
            return response()->json($e->getMessage()." ".$e->getFile()." ".$e->getLine());
        }
        return response()->json('Produto(s) cadastrado(s)!');
    }

    public function show($id)
    {

        $produtos = Produto::whereIn('id',json_decode($id))->get();
        return response()->json($produtos);
    }

    public function update($id, Request $request)
    {
        try {
            DB::beginTransaction();
            foreach ($request->all() as $p) {
                $produto = Produto::Find($p['id']);
                error_log(json_encode([$produto->quantidade, $p['quantidade']]));
                if ($produto->quantidade != $p['quantidade']) {
                    Quantidades::create([
                        'produto_id' => $produto->id,
                        'quantidade_antes' => $produto->quantidade,
                        'quantidade_depois' => $p['quantidade'],
                    ]);
                }
                $produto->update($p);
            }
            DB::commit();
        }catch (\Exception $e){
            DB::rollBack();
            Log::error($e->getMessage()." ".$e->getFile()." ".$e->getLine());
            return response()->json($e->getMessage()." ".$e->getFile()." ".$e->getLine());
        }
        return response()->json('Product(s) updated(s)!');
    }

    public function destroy($id)
    {

        try {
            DB::beginTransaction();
            $selecteds = explode(',', $id);
            foreach ($selecteds as $id) {
                $produto = Produto::findOrFail($id);
                $produto->clearHistoryChanges();
                foreach ($produto->quantidades as $q){
                    $q->delete();
                }
                $produto->delete();
            }
            DB::commit();
        }catch (\Exception $e){
            DB::rollBack();
            Log::error($e->getMessage()." ".$e->getFile()." ".$e->getLine());
            return response()->json($e->getMessage()." ".$e->getFile()." ".$e->getLine());
        }
        return response()->json('Product(s) deleted(s)!');
    }

    public function changes($id)
    {
        $produtos = Produto::whereIn('id',json_decode($id))->get();
        $history = array();
        foreach ($produtos as $p) {
            foreach ($p->historyChanges() as $h){
                $h->before_changes = json_decode($h->before_changes);
                $h->after_changes = json_decode($h->after_changes);
                array_push($history,$h);
            }
        }
        return response()->json($history);
    }
    public function quantidades($id)
    {
        $produto = Produto::where('id',$id)->with('quantidades')->first();
        if(!empty($produto->quantidades)){
            $produto->quantidades =  json_decode($produto->quantidades);
        }
        return response()->json($produto);
    }

}
