import Image from "next/image";

interface HeaderProps {
  onRefresh: () => void;
  isLoading: boolean;
}

export default function Header({ onRefresh, isLoading }: HeaderProps) {
  return (
    <div className="header-box">
      <div className="header-title-group">
        <Image src="/icons/ferris-wheel.svg" alt="Evertime logo" width={36} height={36} priority />
        <div className="header-text">
          <h1>에버타임</h1>
          <p>현장 상황에 따라 오차가 발생할 수 있습니다.</p>
        </div>
      </div>
      <button onClick={onRefresh} disabled={isLoading} className="refresh-button">
        <Image
          src="/icons/refresh.svg"
          alt="Refresh"
          className={isLoading ? 'animate-spin' : ''}
          width={24}
          height={24}
          priority
        />
      </button>
    </div>
  );
}