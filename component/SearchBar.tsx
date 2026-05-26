interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-box">
      <div className="search-icon-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/search.svg" alt="Search" className="search-icon" />
      </div>
      <input
        type="text"
        placeholder="어트랙션 이름을 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
      {value && (
        <button onClick={() => onChange('')} className="search-clear-button">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/close.svg" alt="Clear" className="clear-icon" />
        </button>
      )}
    </div>
  );
}