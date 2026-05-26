interface HeaderProps {
  onRefresh: () => void;
  isLoading: boolean;
}

export default function Header({ onRefresh, isLoading }: HeaderProps) {
  return (
    <div className="header-box">
      <div className="header-title-group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/tree.svg" alt="Evertime Sun" className="header-icon" />
        <div className="header-text">
          <h1>에버타임</h1>
          <p>현장 상황에 따라 오차가 발생할 수 있습니다.</p>
        </div>
      </div>
      <button onClick={onRefresh} disabled={isLoading} className="refresh-button">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/refresh.svg"
          alt="Refresh"
          className={`header-icon ${isLoading ? 'animate-spin' : ''}`}
          style={{ width: '20px', height: '20px' }}
        />
      </button>
    </div>
  );
}