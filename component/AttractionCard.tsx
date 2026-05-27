import { Ride } from '@/app/types';
import { getKoName } from '@/util/formatter';
import Image from "next/image";

export default function AttractionCard({ ride }: { ride: Ride }) {
  const koreanName = getKoName(ride.name);

  const getBadgeClass = (time: number) => {
    if (time >= 60) return 'badge-red';
    if (time >= 30) return 'badge-amber';
    return 'badge-green';
  };

  const formattedTime = new Date(ride.last_updated).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="attraction-card">
      <div className="card-info">
        <h3 className="card-title">{koreanName}</h3>
        <div className="card-time-group">
          <Image src="/icons/clock.svg" alt="Clock" className="time-icon" width={24} height={24} />
          <span>{formattedTime} 갱신</span>
        </div>
      </div>

      <div>
        {ride.is_open ? (
          <div className={`badge-base ${getBadgeClass(ride.wait_time)}`}>
            <span className="wait-number">{ride.wait_time}</span>
            <span className="wait-unit">분</span>
          </div>
        ) : (
          <div className="badge-closed">
            <span>운영종료</span>
          </div>
        )}
      </div>
    </div>
  );
}