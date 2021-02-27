import {  Controller, Post,Body,Get,Param,Patch,Delete,Put } from '@nestjs/common';
import { Pokemon } from './pokemon.model';
import {PokemeonService} from './pokemen.service'

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemeonService) {}
  @Post('/addPokemons')
  addPokemons (){
      
   this.pokemonService.findAll().subscribe(res=>
    res.results.forEach(pokemon=>{
      this.pokemonService.addPokemon(pokemon)

    })
    )
    
    }

    @Get()
    getPokemon (){
       return this.pokemonService.getPokemon()
      }

      @Get(':id')
      getPokemonById (@Param('id') pokemonId: string){
         return this.pokemonService.getPokemonById(pokemonId)
        }
   

        @Delete(':id')
        deletePokemon(
         @Param('id') pokemonId: string)  
       {
         return this.pokemonService.deletePokemon(pokemonId)
       }

       @Patch(':id')
   updateProduct(
    @Param('id') pokemonId: string,
    @Body() pokemon : Pokemon,
  )  
  {
    return this.pokemonService.updatePokemon(pokemonId, pokemon)
  }

}
