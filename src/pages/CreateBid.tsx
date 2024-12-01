import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const bidSchema = z.object({
  checkIn: z.string(),
  checkOut: z.string(),
  guests: z.number().min(1),
  budget: z.number().min(1),
  requirements: z.string().min(10),
});

type BidFormData = z.infer<typeof bidSchema>;

export function CreateBid() {
  const { register, handleSubmit, formState: { errors } } = useForm<BidFormData>({
    resolver: zodResolver(bidSchema),
  });

  const onSubmit = (data: BidFormData) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold">Create a Bid Request</h1>
      
      <Card className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
              <input
                type="date"
                {...register('checkIn')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
              {errors.checkIn && (
                <p className="mt-1 text-sm text-red-600">{errors.checkIn.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
              <input
                type="date"
                {...register('checkOut')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
              {errors.checkOut && (
                <p className="mt-1 text-sm text-red-600">{errors.checkOut.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
            <input
              type="number"
              {...register('guests', { valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.guests && (
              <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Budget per Night ($)</label>
            <input
              type="number"
              {...register('budget', { valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.budget && (
              <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Special Requirements</label>
            <textarea
              {...register('requirements')}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.requirements && (
              <p className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">Submit Bid Request</Button>
        </form>
      </Card>
    </div>
  );
}