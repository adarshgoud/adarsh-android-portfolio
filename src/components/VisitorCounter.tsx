import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter = () => {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  
  useEffect(() => {
    // Simple approach: check if this browser has visited before
    const hasVisitedBefore = localStorage.getItem('hasVisitedPortfolio');
    
    // Get current visitor count
    const storedCount = localStorage.getItem('portfolioVisitorCount');
    let currentCount = storedCount ? parseInt(storedCount) : 0;
    
    console.log('Checking visitor status...');
    console.log('Has visited before:', hasVisitedBefore);
    console.log('Current count:', currentCount);
    
    // If this is a first-time visitor, increment count
    if (!hasVisitedBefore) {
      const newCount = currentCount + 1;
      console.log('New visitor detected! Incrementing to:', newCount);
      
      setUniqueVisitors(newCount);
      
      // Save the incremented count
      localStorage.setItem('portfolioVisitorCount', newCount.toString());
      
      // Mark this browser as having visited
      localStorage.setItem('hasVisitedPortfolio', 'true');
      
      console.log('Saved new count and visitor status');
    } else {
      // Returning visitor
      console.log('Returning visitor, showing existing count:', currentCount);
      setUniqueVisitors(currentCount);
    }
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-4">
      <Eye className="w-4 h-4" />
      <span>{uniqueVisitors.toLocaleString()} visitors</span>
    </div>
  );
};