'use client';

import { useEffect } from 'react';
import Button from 'src/components/@UI/Button/Button.client';

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <Button color='bg-red-500' onClick={() => reset()}>Reset error boundary</Button>
    </div>
  );
}

