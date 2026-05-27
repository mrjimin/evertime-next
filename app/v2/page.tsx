'use client';

import { useState, useEffect, useCallback } from 'react';
import { Ride } from '../types_v2';
import { fetchAttractions } from '@/util/api_v2';
import { getKoName } from '@/util/formatter';
import Header from '@/component/Header';
import SearchBar from '@/component/SearchBar';
import AttractionCard from '@/component/AttractionCard_v2';
import Footer from '@/component/Footer';

export default function HomePage() {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAttractions();
      setRides(data);
    } catch {
      setError('대기시간 정보를 가져오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const initLoad = async () => { await loadData(); };
    initLoad();
  }, [loadData]);

  const clean = (t: string) => t.toLowerCase().replace(/\s+/g, '');

  const filteredRides = rides
    .filter((r) => {
      const kn = getKoName(r.name);
      return clean(r.name).includes(clean(search)) || clean(kn).includes(clean(search));
    })
    .sort((a, b) => {
      if (a.status == "CLOSED") return 1;
      if (b.status == "CLOSED") return -1;
      return a.last_updated - b.last_updated;
    });

  return (
    <div className="evertime-container">
      <div className="evertime-sticky-bar">
        <Header onRefresh={loadData} isLoading={loading} />
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="evertime-content">
        {loading ? (
          <div className="status-container">
            <div className="status-icon-wrapper loading"></div>
            <span className="status-text attraction-card loading">실시간 대기열 가져오는 중...</span>
          </div>
        ) : error ? (
          <div className="status-container">
            <div className="status-icon-wrapper error">
              <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span className="status-text error">{error}</span>
            <button onClick={loadData} className="retry-button">다시 시도</button>
          </div>
        ) : filteredRides.length === 0 ? (
          <div className="status-container">
            <div className="status-icon-wrapper empty">
              <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <span className="status-text attraction-card empty">일치하는 어트랙션이 없습니다.</span>
          </div>
        ) : (
          filteredRides.map((ride) => <AttractionCard key={ride.id} ride={ride} />)
        )}
      </div>

      <Footer />
    </div>
  );
}