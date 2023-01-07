import { render, renderHook, waitFor } from "@testing-library/react";
import { useFetchgifs } from "../../src/hooks/useFetchgifs";

describe('Pruebas en hook useFetchgifs', () => {
    
    test('Debe retornar el estado inicial', () => { 
        
       const { result } = renderHook( () => useFetchgifs('Smash'));
       const {images, isLoading} = result.current;
       expect(images.length).toBe(0);
       expect(isLoading).toBeTruthy();

    });

    test('Debe retornar un arreglo de imagenes y el isLoading en falso', async() => { 
        
        const { result } = renderHook( () => useFetchgifs('Smash'));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
 
     });
});