import HomePage from './components/Homepage'
import Skillpage from './components/Skillpage';
import DevlopmentDetails from './components/DevelopmentDetails';
import WorkProcessSection from './components/WorkProcessSection';
import Contact from './components/Contact';
import Fotter from './components/Fotter';

export default function Page() {
  return (
    <main className="min-h-screen"> 
      <HomePage />
      <Skillpage/>
      <DevlopmentDetails></DevlopmentDetails>
      <WorkProcessSection></WorkProcessSection>
      <Contact></Contact>
      <Fotter></Fotter>

    </main>
  );
}