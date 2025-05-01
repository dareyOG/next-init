import { Card } from '@/ui/card';
import Link from 'next/link';

function Notifications() {
  return (
    <Card>
      <div>notifications</div>
      <div>
        <Link href={'/dashboard/archived'}>Archived</Link>
      </div>
    </Card>
  );
}

export default Notifications;
