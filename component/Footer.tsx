export default function Footer() {
  return (
    <footer className="footer-box">
      <div className="footer-team">
        <strong>Made by.</strong> mrjimin & Team
      </div>

      <p className="footer-members">
        <span>서지민 (개발 총괄)</span>
        <span className="divider">|</span>
        <span>송현섭 (서비스 기획)</span>
      </p>

      <p className="footer-desc">
        에버랜드 대기시간을 실시간으로 확인하고,<br />
        우리만의 완벽한 동선을 짜기 위해 제작되었습니다.
      </p>

      <p className="footer-support">Support by. 우석고등학교 (공돌이)</p>

      <p className="footer-notice">본 서비스는 우석고등학교 및 에버랜드 공식 기관과 연관이 없는 프로젝트입니다.</p>

      <p className="footer-copy">&copy; {new Date().getFullYear()} 에버타임 · All rights reserved.</p>
    </footer>
  );
}