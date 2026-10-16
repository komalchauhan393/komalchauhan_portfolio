export const personalInfo = {
  name: "Komal Chauhan",
  title: "Backend & Laravel Developer",
  subTitle: "Specializing in High-Performance REST APIs, Filament Admin Panels, Microservices & Cloud Architectures",
  location: "Delhi, India",
  phone: "+91-9760025821",
  email: "komalchauhan393@gmail.com",
  linkedin: "https://linkedin.com/in/komal-chauhan-b51833214",
  github: "https://github.com/komal-chauhan",
  resumeUrl: "/KOMAL_RESUME.pdf",
  bio: "Backend Developer with 3+ years of professional experience engineering robust, scalable web applications across travel, patient therapy, e-commerce, event management, social, and on-demand service domains. Proven expertise in PHP, Laravel, Livewire, Filament, Node.js, Next.js, and cloud architectures on AWS.",
  stats: [
    { label: "Years Experience", value: "3+", suffix: "Years" },
    { label: "Production Projects", value: "10+", suffix: "Delivered" },
    { label: "Employee of the Month", value: "3x", suffix: "Awards" },
    { label: "Query Optimization", value: "20%", suffix: "Speed Boost" }
  ]
};

export const skillCategories = [
  {
    category: "Languages & Frameworks",
    icon: "Code",
    description: "Robust application development with modern PHP and JavaScript ecosystems",
    skills: [
      { name: "PHP", level: "Expert", tags: ["OOP", "Design Patterns", "PHP 8.x"] },
      { name: "Laravel", level: "Expert", tags: ["Eloquent", "Sanctum", "Queues", "Jobs"] },
      { name: "Livewire", level: "Advanced", tags: ["Reactive UI", "Full-Stack Components"] },
      { name: "Node.js", level: "Advanced", tags: ["Express", "Async/Await", "Event Loop"] },
      { name: "Next.js", level: "Proficient", tags: ["SSR", "Admin Dashboards", "API Routes"] },
      { name: "JavaScript / ES6+", level: "Advanced", tags: ["Async", "DOM", "Fetch/Axios"] }
    ]
  },
  {
    category: "Backend & System Design",
    icon: "Server",
    description: "Scalable APIs, authentication mechanisms, and resilient service communication",
    skills: [
      { name: "RESTful APIs", level: "Expert", tags: ["API Versioning", "Rate Limiting", "Swagger"] },
      { name: "API Security & Auth", level: "Expert", tags: ["JWT", "Laravel Sanctum", "Role RBAC"] },
      { name: "Filament Admin Panel", level: "Expert", tags: ["Custom Widgets", "Tables", "Actions"] },
      { name: "WebSockets & Real-Time", level: "Advanced", tags: ["Pusher", "Socket.io", "Broadcasting"] },
      { name: "Microservices", level: "Advanced", tags: ["Service Decoupling", "Event Messaging"] },
      { name: "Batch Processing", level: "Advanced", tags: ["Queued Jobs", "Excel Import/Export in 3 hrs"] }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    description: "High-throughput relational & document databases with optimized indexing",
    skills: [
      { name: "MySQL", level: "Expert", tags: ["Query Optimization", "Indexing", "Replication"] },
      { name: "PostgreSQL", level: "Advanced", tags: ["GIS Data", "Complex Joins", "JSONB"] },
      { name: "MongoDB", level: "Advanced", tags: ["Aggregations", "NoSQL Modeling", "Mongoose"] },
      { name: "Redis", level: "Proficient", tags: ["Caching", "Session Store", "Pub/Sub"] }
    ]
  },
  {
    category: "Cloud, DevOps & Hosting",
    icon: "Cloud",
    description: "Cloud deployment, container orchestration, server automation and CI/CD",
    skills: [
      { name: "AWS EC2 & S3", level: "Advanced", tags: ["Compute Instances", "Storage Buckets", "CDN"] },
      { name: "AWS IAM & CloudWatch", level: "Advanced", tags: ["Policy Control", "Log Monitoring", "Alerts"] },
      { name: "AWS SNS & Twilio", level: "Advanced", tags: ["SMS Alerts", "Push Topics", "OTP Workflows"] },
      { name: "Docker & Nginx", level: "Advanced", tags: ["Containerization", "Reverse Proxy", "SSL"] },
      { name: "CI/CD & GitHub Actions", level: "Proficient", tags: ["Automated Tests", "Auto Deployment"] },
      { name: "Plesk & Control Panels", level: "Expert", tags: ["Production Web Hosting", "DNS", "Mail"] }
    ]
  },
  {
    category: "Payment & Third-Party APIs",
    icon: "CreditCard",
    description: "Seamless financial integrations and communication providers",
    skills: [
      { name: "Stripe", level: "Expert", tags: ["Webhooks", "Subscriptions", "Checkout"] },
      { name: "PayPal", level: "Advanced", tags: ["IPN", "Smart Buttons", "Vault"] },
      { name: "Razorpay & Paymob", level: "Advanced", tags: ["Indian/MENA Gateways", "Refunds"] },
      { name: "Telr", level: "Advanced", tags: ["Middle-East Gateway", "Card Tokens"] },
      { name: "Firebase & FCM", level: "Expert", tags: ["Push Notifications", "Firestore", "Auth"] },
      { name: "Brevo (Sendinblue)", level: "Advanced", tags: ["Transactional Emails", "Templates"] }
    ]
  }
];

export const projects = [
  {
    id: "travel-agency",
    title: "Travel Booking Platform",
    client: "Travel Agency",
    category: "Laravel & Filament",
    role: "Lead Backend Developer",
    liveUrl: "https://kelioniukryptis.lt",
    tags: ["Laravel", "Livewire", "Filament", "MySQL", "Hosting CP"],
    description: "Production travel booking platform serving international users. Architected complete backend booking pipeline, tour package management, dynamic pricing, and a Filament-powered administrative suite.",
    features: [
      "Custom tour package builder with dynamic hotel and flight addons",
      "Filament-based administrative back-office with visual analytics",
      "Seamless booking and checkout with invoice generation",
      "Live production deployment and maintenance on hosting control panel"
    ],
    highlight: "Live Production Site: kelioniukryptis.lt",
    stats: "24/7 Live Availability"
  },
  {
    id: "koremean",
    title: "Koremean – Patient Therapy Management",
    client: "Healthcare Sector",
    category: "Laravel & Filament",
    role: "Backend Architect",
    liveUrl: null,
    tags: ["Laravel", "Livewire", "Filament", "MySQL", "Plesk"],
    description: "Comprehensive medical application streamlining clinical workflows, patient session bookings, therapist schedule coordination, and confidential medical record auditing.",
    features: [
      "Secure patient profiles and HIPPA-conscious clinical notes storage",
      "Custom therapist allocation and calendar appointment engine",
      "Role-based administrative dashboards using Filament",
      "Plesk-configured automated database backups and zero-downtime releases"
    ],
    highlight: "Enterprise Healthcare Management",
    stats: "Automated Daily Backups"
  },
  {
    id: "ma3-taxi",
    title: "Ma3 LLC – On-Demand Taxi Booking Platform",
    client: "Ma3 Mobility",
    category: "Node.js & Next.js",
    role: "Full-Stack Node/Next Developer",
    liveUrl: null,
    tags: ["Node.js", "Next.js", "MongoDB", "AWS", "WebSockets"],
    description: "High-concurrency Uber-style transportation application enabling passengers to hail rides, track drivers on real-time maps, and process instant fares.",
    features: [
      "Real-time driver location updates via WebSockets and geolocation clustering",
      "Server-side microservices powered by Node.js and MongoDB aggregation pipelines",
      "Modern dispatcher and fleet administrator console engineered in Next.js",
      "Scalable infrastructure provisioned on AWS EC2 with auto-restart via PM2"
    ],
    highlight: "Uber-style Real-time Architecture",
    stats: "Sub-second Dispatch Latency"
  },
  {
    id: "afiato",
    title: "Afiato – Multi-Vendor E-Commerce Platform",
    client: "Retail & Commerce",
    category: "Laravel & Filament",
    role: "Backend & Payment Lead",
    liveUrl: null,
    tags: ["Laravel", "MySQL", "Sanctum", "Stripe", "Firebase"],
    description: "High-volume digital commerce marketplace featuring catalog browsing, lightning-fast cart calculations, payment gateway integrations, and instant push alerts.",
    features: [
      "Multi-currency Stripe payment gateway integration with idempotent webhook processing",
      "Secure API token auth powered by Laravel Sanctum",
      "Instant order status updates pushed through Firebase Cloud Messaging (FCM)",
      "Database schema indexed to handle heavy concurrent seasonal flash sales"
    ],
    highlight: "15% increase in customer checkout completions",
    stats: "Zero-error Webhooks"
  },
  {
    id: "resource-tracking",
    title: "Resource Tracking – Geofenced Attendance System",
    client: "Enterprise Workforce",
    category: "APIs & Microservices",
    role: "Backend API Engineer",
    liveUrl: null,
    tags: ["Laravel", "PostgreSQL", "GIS", "REST APIs"],
    description: "Location-aware enterprise attendance platform with automated geo-fenced clock-in/out verification, preventing proxy attendance through device fingerprinting.",
    features: [
      "Haversine & PostGIS geolocation distance validation for radius verification",
      "Automated biometric and mobile punch-in/punch-out audit trails",
      "High-precision time calculation, shift differential rules, and overtime tracking",
      "PostgreSQL indexed tables for rapid multi-year attendance history queries"
    ],
    highlight: "Automated Geo-fenced Validation",
    stats: "100% Anti-spoof Verification"
  },
  {
    id: "winnipeg-events",
    title: "Winnipeg Healing Connection",
    client: "Community & Events",
    category: "Laravel & Filament",
    role: "Backend Developer",
    liveUrl: null,
    tags: ["Laravel", "MySQL", "Event Ticketing", "Payment Gateways"],
    description: "Community membership portal and event management engine where patrons subscribe to recurring tiers, book workshops, and receive digital admission passes.",
    features: [
      "Tiered membership subscriptions and recurring renewal handlers",
      "Dynamic ticketing engine with QR code generation and validation",
      "Automated email notifications and calendar invite dispatch via Brevo/Twilio",
      "Custom administrative reporting for ticket sales and attendance statistics"
    ],
    highlight: "Subscription & Ticketing Automation",
    stats: "Automated Event Passes"
  },
  {
    id: "haeyo-dating",
    title: "Haeyo Dating – Social Matchmaking Platform",
    client: "Social Networking",
    category: "Real-Time & Cloud",
    role: "Backend & Real-Time Engineer",
    liveUrl: null,
    tags: ["Laravel", "MySQL", "PayPal", "Firebase", "WebSockets"],
    description: "Engaging social dating platform featuring swipe algorithms, verified user profiles, real-time messaging, and premium subscription monetization.",
    features: [
      "Live 1-on-1 instant messaging and read receipts built on Firebase & WebSockets",
      "Location-based proximity matching algorithm",
      "PayPal recurring subscription billing for VIP profile upgrades",
      "Photo verification and anti-spam moderation pipelines"
    ],
    highlight: "Real-time Messaging & Proximity Match",
    stats: "Instant Chat Delivery"
  },
  {
    id: "xc-vpn",
    title: "XC VPN – Infrastructure API Gateway",
    client: "Network Security",
    category: "APIs & Microservices",
    role: "API Security Engineer",
    liveUrl: null,
    tags: ["Laravel", "MySQL", "Firebase", "RESTful APIs"],
    description: "High-security API layer orchestrating user sessions, server node status checks, and encrypted token generation for a global VPN client application.",
    features: [
      "Hardened RESTful APIs enabling secure third-party connection to VPN nodes",
      "Server load monitoring and dynamic connection routing to fastest nodes",
      "JWT-based device authentication and cryptographic session renewal",
      "Real-time abuse detection and rate limiting"
    ],
    highlight: "Hardened Security & Low Latency APIs",
    stats: "Sub-10ms Handshake API"
  },
  {
    id: "negate-social",
    title: "Negate – Social Thought Sharing Platform",
    client: "Social Media",
    category: "Laravel & Filament",
    role: "Full-Stack Backend Developer",
    liveUrl: null,
    tags: ["Laravel", "MySQL", "Social Graphs", "Feed Algorithm"],
    description: "Micro-blogging and social networking application allowing members to share thoughts, follow contributors, engage in threaded discussions, and curate profile feeds.",
    features: [
      "Optimized relational schema for user follower graphs and newsfeed generation",
      "Threaded comment hierarchies and instant notification triggers",
      "Full profile customizer and rich text formatting controls",
      "Sanitized inputs preventing XSS and SQL injection across all endpoints"
    ],
    highlight: "Scalable Feed Graph Schema",
    stats: "Clean Social Graph Design"
  }
];

export const experienceTimeline = [
  {
    company: "Mobrilz Private Limited",
    role: "Laravel Developer",
    period: "09 February 2026 – Present",
    status: "Current",
    location: "Delhi NCR, India",
    achievements: [
      "Engineered and maintained mission-critical web applications utilizing Laravel, Livewire, and modern PHP paradigms.",
      "Architected intuitive, data-intensive admin backends with Filament Admin Panel, slashing back-office administrative overhead.",
      "Spearheaded database schema design and tuning across heterogeneous MySQL and MongoDB environments.",
      "Managed continuous deployment workflows and multi-server environments using AWS, Plesk, and custom hosting control panels.",
      "Integrated payment gateways (Stripe, Telr, Razorpay) and notification services (Firebase FCM, Brevo, Twilio).",
      "Awarded Employee of the Month for exceptional delivery speed and architectural consistency."
    ]
  },
  {
    company: "Webzent Technologies",
    role: "PHP Laravel Developer",
    period: "Aug 2025 – 05 Dec 2025",
    status: "Completed",
    location: "India",
    achievements: [
      "Spearheaded the development and maintenance of scalable web applications using Laravel and MySQL.",
      "Engineered end-to-end membership and event management systems equipped with secure payment gateways and webhook listeners.",
      "Collaborated closely with cross-functional frontend teams to design performant, contract-driven REST APIs.",
      "Enforced rigorous code reviews, PSR compliance, and secure coding standards."
    ]
  },
  {
    company: "Fluper Limited",
    role: "PHP Laravel Developer",
    period: "Mar 2023 – May 2025",
    status: "Completed",
    location: "Noida / Delhi, India",
    achievements: [
      "Developed high-throughput RESTful APIs serving both native mobile applications (iOS/Android) and modern web clients.",
      "Implemented enterprise-grade authentication frameworks using JWT and Laravel Sanctum tokens.",
      "Boosted database and query performance by 20% through extensive query profiling, eager loading, and indexing optimization.",
      "Co-developed an e-commerce checkout module that contributed directly to a 15% increase in customer conversions and registrations.",
      "Honored with Employee of the Month award TWICE for outstanding technical output and teamwork."
    ]
  }
];

export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    year: "2018",
    grade: "1st Division",
    description: "Advanced coursework in Distributed Systems, Database Management Systems (DBMS), Algorithms & Software Engineering."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Chaudhary Charan Singh University (CCSU)",
    year: "2016",
    grade: "1st Division",
    description: "Foundational studies in Object-Oriented Programming, Data Structures, Web Development, and Computer Architecture."
  },
  {
    degree: "Senior Secondary (12th Grade)",
    institution: "Sant Vivekananda Inter College, Meerut",
    year: "2013",
    grade: "Science & Mathematics"
  },
  {
    degree: "Secondary School (10th Grade)",
    institution: "Sant Vivekananda Inter College, Meerut",
    year: "2011",
    grade: "Science & Mathematics"
  }
];

export const keyHighlights = [
  {
    title: "3x Employee of the Month",
    subtitle: "Fluper Limited (2x) & Mobrilz (1x)",
    desc: "Repeatedly recognized for proactive problem-solving, code quality, and exceptional sprint delivery.",
    icon: "Trophy"
  },
  {
    title: "Fast-Track Production Delivery",
    subtitle: "Complex Feature Delivery in 3 Hours",
    desc: "Implemented complex Excel import/export functionality with background queue processing in just 3 hours for a live client project.",
    icon: "Zap"
  },
  {
    title: "20% Query Performance Boost",
    subtitle: "Fluper Production Databases",
    desc: "Systematically diagnosed N+1 query bottlenecks, optimized complex SQL joins, and implemented indexing to accelerate API response times.",
    icon: "Gauge"
  },
  {
    title: "6 Months Industrial Training",
    subtitle: "CHW Forge, Ghaziabad",
    desc: "Hands-on enterprise systems training focusing on software engineering lifecycles and business logic automation.",
    icon: "GraduationCap"
  }
];

export const codeSnippets = [
  {
    id: "laravel-api",
    title: "Laravel 11 • Sanctum Auth & API Resource",
    lang: "php",
    code: `<?php

namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\Auth\\LoginRequest;
use App\\Http\\Resources\\UserResource;
use App\\Models\\User;
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Validation\\ValidationException;

class AuthController extends Controller
{
    /**
     * Authenticate user and issue Sanctum token with granular abilities.
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials do not match our records.'],
            ]);
        }

        // Revoke previous session tokens if single-device enforced
        $user->tokens()->where('name', 'api-token')->delete();

        $token = $user->createToken('api-token', ['user:read', 'orders:create'])->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Authentication successful',
            'token' => $token,
            'user' => new UserResource($user),
        ], 200);
    }
}`
  },
  {
    id: "filament-resource",
    title: "Filament Admin • Custom Resource Schema",
    lang: "php",
    code: `<?php

namespace App\\Filament\\Resources;

use App\\Models\\Booking;
use Filament\\Forms;
use Filament\\Forms\\Form;
use Filament\\Resources\\Resource;
use Filament\\Tables;
use Filament\\Tables\\Table;

class BookingResource extends Resource
{
    protected static ?string $model = Booking::class;
    protected static ?string $navigationIcon = 'heroicon-o-calendar-days';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\\Components\\TextInput::make('reference_no')
                ->default(fn () => 'TRV-' . strtoupper(str()->random(8)))
                ->required()
                ->disabled(),
            Forms\\Components\\Select::make('package_id')
                ->relationship('package', 'title')
                ->searchable()
                ->required(),
            Forms\\Components\\Select::make('status')
                ->options([
                    'pending' => 'Pending Confirmation',
                    'confirmed' => 'Confirmed & Paid',
                    'cancelled' => 'Cancelled',
                ])
                ->default('pending')
                ->required(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\\Columns\\TextColumn::make('reference_no')->copyable()->sortable(),
                Tables\\Columns\\TextColumn::make('package.title')->searchable(),
                Tables\\Columns\\BadgeColumn::make('status')
                    ->colors([
                        'warning' => 'pending',
                        'success' => 'confirmed',
                        'danger' => 'cancelled',
                    ]),
                Tables\\Columns\\TextColumn::make('created_at')->dateTime()->sortable(),
            ]);
    }
}`
  },
  {
    id: "node-socket",
    title: "Node.js • Real-time Taxi Dispatch Handler",
    lang: "javascript",
    code: `// taxi-dispatch.service.js
import { Server } from 'socket.io';
import { redisClient } from '../config/redis.js';

export function initializeTaxiSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: { origin: process.env.CLIENT_URL, methods: ['GET', 'POST'] },
  });

  io.on('connection', (socket) => {
    // Driver updates current coordinates
    socket.on('driver:update_location', async ({ driverId, lat, lng }) => {
      // Store geospatial coordinate with Redis GEOADD
      await redisClient.geoAdd('active_drivers', {
        longitude: lng,
        latitude: lat,
        member: driverId,
      });

      // Broadcast update to subscribed riders in the zone
      socket.to(\`zone_\${lat.toFixed(2)}_\${lng.toFixed(2)}\`).emit('driver:moved', {
        driverId,
        coords: [lat, lng],
      });
    });

    // Handle instant booking dispatch
    socket.on('rider:request_taxi', async (bookingData) => {
      const nearestDrivers = await redisClient.geoSearch(
        'active_drivers',
        { longitude: bookingData.pickupLng, latitude: bookingData.pickupLat },
        { radius: 5, unit: 'km' }
      );
      
      socket.emit('rider:matching_status', { count: nearestDrivers.length });
    });
  });
}`
  }
];
