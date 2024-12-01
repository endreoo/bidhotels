import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Bids() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Bid Requests</h1>
        <Button>Create New Bid</Button>
      </div>
      
      <div className="mt-8">
        <Card>
          <p className="text-gray-600">No active bids yet. Create a new bid to get started!</p>
        </Card>
      </div>
    </div>
  );
}