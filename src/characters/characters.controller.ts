import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('characters')
export class CharactersController {

  @Get()
  async getAllCharacters() {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data;
  }
}
