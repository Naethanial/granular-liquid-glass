import { Geist } from "next/font/google";
import LiquidGlass from "../../liquid-glass-react-src";
import { Github, LogOut as LogOutIcon } from "lucide-react";
import { useState, useRef } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  // User Info Card Controls
  const [displacementScale, setDisplacementScale] = useState(64)
  const [blurAmount, setBlurAmount] = useState(10)
  const [saturation, setSaturation] = useState(140)
  const [aberrationIntensity, setAberrationIntensity] = useState(2)
  const [elasticity, setElasticity] = useState(0)
  const [cornerRadius, setCornerRadius] = useState(32)
  const [userInfoOverLight, setUserInfoOverLight] = useState(false)
  const [userInfoMode, setUserInfoMode] = useState<"standard" | "polar" | "prominent" | "shader">("standard")
  
  // Tint color controls
  const [tintColor, setTintColor] = useState({ r: 128, g: 128, b: 255 })
  const [tintAmount, setTintAmount] = useState(0.3)
  
  // Over Light Effect Controls
  const [autoOverLight, setAutoOverLight] = useState(true)

  // Log Out Button Controls
  const [logoutDisplacementScale, setLogoutDisplacementScale] = useState(64)
  const [logoutBlurAmount, setLogoutBlurAmount] = useState(4)
  const [logoutSaturation, setLogoutSaturation] = useState(130)
  const [logoutAberrationIntensity, setLogoutAberrationIntensity] = useState(2)
  const [logoutElasticity, setLogoutElasticity] = useState(0.35)
  const [logoutCornerRadius, setLogoutCornerRadius] = useState(100)
  const [logoutOverLight, setLogoutOverLight] = useState(false)
  const [logoutMode, setLogoutMode] = useState<"standard" | "polar" | "prominent" | "shader">("standard")

  // Shared state
  const [activeTab, setActiveTab] = useState<"userInfo" | "logOut">("userInfo")
  const containerRef = useRef<HTMLDivElement>(null)

  const [scroll, setScroll] = useState(0)

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      setScroll((event?.target as any)?.scrollTop)
    })
  }

  const scrollingOverBrightSection = scroll > 230 && scroll < 500

  return (
    <div
      className={`${geistSans.className} grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 shadow-2xl w-full max-w-5xl mx-auto md:my-10 h-screen md:max-h-[calc(100vh-5rem)] md:rounded-3xl overflow-hidden font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Left Panel - Glass Effect Demo */}
      <div className="flex-1 relative overflow-auto min-h-screen md:col-span-2" ref={containerRef} onScroll={handleScroll}>
        <div className="w-full min-h-[200vh] absolute top-0 left-0 pb-96 mb-96">
          <img src="https://picsum.photos/2000/2000" className="w-full h-96 object-cover" />
          <div className="flex flex-col gap-2" id="bright-section">
            <h2 className="text-2xl font-semibold my-5 text-center">Some Heading</h2>
            <p className="px-10">
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
              <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
              <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
              <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
              <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
            </p>
          </div>
          <img src="https://picsum.photos/1200/1200" className="w-full h-80 object-cover my-10" />
          <img src="https://picsum.photos/1400/1300" className="w-full h-72 object-cover my-10" />
          <img src="https://picsum.photos/1100/1200" className="w-full h-96 object-cover my-10 mb-96" />
        </div>

        {activeTab === "userInfo" && (
          <LiquidGlass
            displacementScale={displacementScale}
            blurAmount={blurAmount}
            saturation={saturation}
            aberrationIntensity={aberrationIntensity}
            elasticity={elasticity}
            cornerRadius={cornerRadius}
            mouseContainer={containerRef}
            overLight={(autoOverLight && scrollingOverBrightSection) || userInfoOverLight}
            mode={userInfoMode}
            tintColor={tintColor}
            tintAmount={tintAmount}
            style={{
              position: "fixed",
              top: "25%",
              left: "40%",
            }}
          >
            <div className="w-72 text-shadow-lg">
              <h3 className="text-xl font-semibold mb-4">User Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-black/10 backdrop-blur rounded-full flex items-center justify-center text-white font-semibold">JD</div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-white">Software Engineer</p>
                  </div>
                </div>
                <div className="pt-2 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-white">Email:</span>
                    <span className="text-sm">john.doe@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white">Location:</span>
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white">Joined:</span>
                    <span className="text-sm">March 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </LiquidGlass>
        )}

        {activeTab === "logOut" && (
          <LiquidGlass
            displacementScale={logoutDisplacementScale}
            blurAmount={logoutBlurAmount}
            saturation={logoutSaturation}
            aberrationIntensity={logoutAberrationIntensity}
            elasticity={logoutElasticity}
            cornerRadius={logoutCornerRadius}
            mouseContainer={containerRef}
            overLight={(autoOverLight && scrollingOverBrightSection) || logoutOverLight}
            mode={logoutMode}
            tintColor={tintColor}
            tintAmount={tintAmount}
            padding="8px 16px"
            onClick={() => {
              console.log("Logged out")
            }}
            style={{
              position: "fixed",
              top: "20%",
              left: "40%",
            }}
          >
            <h3 className="text-lg font-medium flex items-center gap-2">
              Log Out
              <LogOutIcon className="w-5 h-5" />
            </h3>
          </LiquidGlass>
        )}
      </div>

      {/* Right Panel - Control Panel */}
      <div className="row-start-2 rounded-t-3xl md:rounded-none md:col-start-3 bg-gray-900/80 h-full overflow-y-auto backdrop-blur-md border-l border-white/10 p-8 flex flex-col">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Liquid Glass Demo</h2>
            <a href="https://github.com/Naethanial/granular-liquid-glass" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg" title="View on GitHub">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-white/60 text-sm">Liquid Glass container effect for React. With settings and effects and stuff.</p>

          <p className="font-semibold text-yellow-300 text-xs mt-2 leading-snug">⚠️ This doesn't fully work in Safari and Firefox. You will not see edge refraction on non-chromium browsers.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex mb-6 bg-white/5 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("userInfo")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "userInfo" ? "bg-blue-500 text-white shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            User Info Card
          </button>
          <button
            onClick={() => setActiveTab("logOut")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "logOut" ? "bg-blue-500 text-white shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            Log Out Button
          </button>
        </div>

        <div className="space-y-8 flex-1">
          {/* Over Light Effects Section */}
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Over Light Effects</h3>
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                id="autoOverLight" 
                checked={autoOverLight} 
                onChange={(e) => setAutoOverLight(e.target.checked)} 
                className="w-5 h-5 accent-blue-500" 
              />
              <label htmlFor="autoOverLight" className="text-sm text-white/90">
                Auto-enable when scrolling over bright sections
              </label>
            </div>
            <p className="text-xs text-white/50 mt-2">Automatically applies over light effects when scrolling over bright content</p>
          </div>

          {/* Common Controls */}
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Glass Effects</h3>
            
            <div className="space-y-4">
              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Displacement Scale</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-blue-300">{displacementScale}</span>
                </div>
                <input type="range" min="0" max="200" step="1" value={displacementScale} onChange={(e) => setDisplacementScale(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls the intensity of edge distortion</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Blur Amount</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-green-300">{blurAmount.toFixed(1)}px</span>
                </div>
                <input type="range" min="0" max="50" step="0.1" value={blurAmount} onChange={(e) => setBlurAmount(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls backdrop blur intensity in pixels (0 = no blur)</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Saturation</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-purple-300">{saturation}%</span>
                </div>
                <input type="range" min="100" max="300" step="10" value={saturation} onChange={(e) => setSaturation(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls color saturation of the backdrop</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Chromatic Aberration</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-cyan-300">{aberrationIntensity}</span>
                </div>
                <input type="range" min="0" max="20" step="1" value={aberrationIntensity} onChange={(e) => setAberrationIntensity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls RGB channel separation intensity</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Elasticity</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-orange-300">{elasticity.toFixed(2)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.05" value={elasticity} onChange={(e) => setElasticity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls how much the glass reaches toward the cursor</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Corner Radius</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-pink-300">{cornerRadius === 999 ? "Full" : `${cornerRadius}px`}</span>
                </div>
                <input type="range" min="0" max="100" step="1" value={cornerRadius} onChange={(e) => setCornerRadius(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls the roundness of the glass corners</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Tint Color</span>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-white/70">Red</span>
                      <span className="text-sm font-mono text-red-300">{tintColor.r}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="255" 
                      step="1" 
                      value={tintColor.r} 
                      onChange={(e) => setTintColor({...tintColor, r: Number(e.target.value)})} 
                      className="w-full" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-white/70">Green</span>
                      <span className="text-sm font-mono text-green-300">{tintColor.g}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="255" 
                      step="1" 
                      value={tintColor.g} 
                      onChange={(e) => setTintColor({...tintColor, g: Number(e.target.value)})} 
                      className="w-full" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-white/70">Blue</span>
                      <span className="text-sm font-mono text-blue-300">{tintColor.b}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="255" 
                      step="1" 
                      value={tintColor.b} 
                      onChange={(e) => setTintColor({...tintColor, b: Number(e.target.value)})} 
                      className="w-full" 
                    />
                  </div>
                  <div 
                    className="w-full h-8 rounded border border-white/20" 
                    style={{backgroundColor: `rgb(${tintColor.r}, ${tintColor.g}, ${tintColor.b})`}}
                  />
                </div>
                <p className="text-xs text-white/50 mt-2">RGB color values for the tint overlay</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Tint Amount</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-yellow-300">{(tintAmount * 100).toFixed(0)}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={tintAmount} 
                  onChange={(e) => setTintAmount(Number(e.target.value))} 
                  className="w-full" 
                />
                <p className="text-xs text-white/50 mt-2">Controls the opacity of the color tint</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
