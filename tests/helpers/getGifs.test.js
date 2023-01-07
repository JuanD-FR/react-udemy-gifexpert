import { render, screen } from "@testing-library/react";
import { getGif } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => {
    
    test('Debe retornar arreglo de gifs', async() => { 
            const gifs= await getGif('Zelda');
            expect(gifs.length).toBeGreaterThan(0);
            expect(gifs[0]).toEqual({
                id   : expect.any(String),
                title: expect.any(String),
                url  : expect.any(String)
            });
         });
});