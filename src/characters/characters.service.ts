import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CharactersService {
  async getAllCharacters() {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
  }
}
