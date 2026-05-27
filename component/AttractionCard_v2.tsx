import { Ride } from '@/app/types_v2';
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
          <Image src="/icons/clock.svg" alt="Clock" className="time-icon" />
          <span>{formattedTime} 갱신</span>
        </div>
      </div>

      <div>
        {ride.status ? (
          <div className={`badge-base ${getBadgeClass(ride.last_updated)}`}>
            <span className="wait-number">{ride.last_updated}</span>
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