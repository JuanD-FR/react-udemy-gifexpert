import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchgifs } from "../../src/hooks/useFetchgifs";

jest.mock('../../src/hooks/useFetchgifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Smash';
    test('Debe mostrar el loading inicialmente', () => { 

        useFetchgifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        
        render(<GifGrid category={category}/>);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
    });

    test('Debe mostrar items cuando se cargan imagenes mediante el useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Smash',
                url: 'https://localhost/smash.jpg'
            },
            {
                id: '123',
                title: 'Zelda',
                url: 'https://localhost/zelda.jpg'
            }
        ];

        useFetchgifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        expect( screen.getAllByRole('img').length ).toBe(2);

    });
});