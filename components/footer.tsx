import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Event Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">♪</span>
              </div>
              <h3 className="font-bold">SoundWave Festival</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Experience the ultimate music festival featuring world-class artists and unforgettable performances.
            </p>
            <p className="text-sm font-semibold">25 - 27 July 2026</p>
            <p className="text-sm text-muted-foreground">Golden Valley Park, California</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lineup" className="text-muted-foreground hover:text-primary transition-colors">
                  Lineup
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="text-muted-foreground hover:text-primary transition-colors">
                  Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Venue & Contact */}
          <div>
            <h4 className="font-bold mb-4">Venue & Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Golden Valley Park
              <br />
              Los Angeles, CA 90001
            </p>
            <p className="text-sm mb-3">
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-sm">
              <a
                href="mailto:info@soundwave.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@soundwave.com
              </a>
            </p>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-sm transition-colors"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-sm transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-sm transition-colors"
              >
                🎵
              </a>
            </div>
            <p className="text-xs font-semibold mb-2 text-muted-foreground">Newsletter</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm mb-2"
            />
            <button className="w-full px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 SoundWave Festival. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
