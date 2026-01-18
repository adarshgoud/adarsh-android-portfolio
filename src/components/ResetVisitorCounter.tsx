import { Button } from "./ui/button";

export const ResetVisitorCounter = () => {
  const resetCounter = () => {
    // Remove visitor tracking data
    localStorage.removeItem('portfolioVisitorCount');
    localStorage.removeItem('hasVisitedPortfolio');
    
    alert('Visitor counter has been reset! Refresh the page to see 0 visitors.');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={resetCounter}
        variant="outline" 
        size="sm"
        className="bg-background/80 backdrop-blur-sm"
      >
        Reset Counter
      </Button>
    </div>
  );
};