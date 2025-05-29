import { Loader } from '@mantine/core';

import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

import useRentals from '@/hooks/useRentals';
import RentalStack from '@/components/RentalStack';

export function HomePage() {
  const { rentals, isLoading } = useRentals();

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />

      {isLoading && <Loader type="bars" mx="auto" my="lg" />}
      <RentalStack rentals={rentals} />
    </>
  );
}
