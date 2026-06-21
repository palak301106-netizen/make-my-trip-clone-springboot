//import SignupDialog from '@/components/ui/SignupDialog';
import Navbar from "@/components/ui/Navbar";
import { Plane } from 'lucide-react';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
       style={{
  backgroundImage:
    'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")'
}}
    >
      <div className="min-h-screen bg-gradient-to-b from-black/50 to blue-900/50 backdrop-blur-[2px]">
      <header className="bg-black/20 bakcdrop-blur-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <Plane className="w-8 h-8 text-red-500"/>
            <span className="text-2xl font-bold">MakeMyTour</span>
          </div>
          <div className="flex items-center space-x-4">
            <Navbar/>

            
          </div>
        </div>
      </header>
    </div>
    </div>
  );
}