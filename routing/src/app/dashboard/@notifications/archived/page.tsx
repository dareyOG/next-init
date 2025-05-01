import { Card } from '@/ui/card';
import Link from 'next/link';

function Archived() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link href={'/dashboard'}>Default</Link>
      </div>
    </Card>
  );
}

export default Archived;
