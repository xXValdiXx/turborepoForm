"use client";

import React, { useState } from 'react';
import { Spinner } from 'ui';

const FormWithSpinner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>(''); // Estado para el valor del input

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || name.length < 3) {
      setError('Por favor, ingresa un nombre válido (mínimo 3 caracteres).');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      // Simula una petición asíncrona
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      alert('¡Formulario enviado con éxito!');
    } catch (e) {
      setError('Ocurrió un error al enviar el formulario.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border border-gray-300 rounded"
    >
      <input
        type="text"
        placeholder="Tu nombre"
        className="p-2 border border-gray-300 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? <Spinner size="h-8 w-8" color="border-blue-500" /> : 'Enviar'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default FormWithSpinner;
