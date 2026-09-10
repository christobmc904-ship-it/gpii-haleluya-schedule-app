// ====================================================================
// APLIKASI JADWAL KEGIATAN IBADAH - GPII HALELUYA BELLO
// Google Apps Script Configuration
// ====================================================================

const CONFIG = {
  CHURCH_NAME: "GPII HALELUYA BELLO",
  CHURCH_LOGO: "🙏",
  
  // Jenis Ibadah
  SERVICE_TYPES: {
    SUNDAY: "Ibadah Minggu",
    YOUTH: "Ibadah Pemuda",
    PRAYER: "Persekutuan Doa",
    FAMILY: "Ibadah Rumah Tangga",
    SUNDAY_SCHOOL: "Sekolah Minggu"
  },

  // Struktur Pelayanan Altar per Jenis Ibadah
  ALTAR_SERVICES: {
    SUNDAY: [
      "MC/WL",
      "Pengkhotbah",
      "Liturgos",
      "Doa Syafaat",
      "Doa Persembahan",
      "Pengantar Persembahan",
      "Doa Berkat"
    ],
    YOUTH: [
      "MC/WL",
      "Pengkhotbah",
      "Doa Syafaat",
      "Doa Persembahan",
      "Pengantar Persembahan",
      "Doa Penutup"
    ],
    PRAYER: [
      "MC/WL",
      "Pengkhotbah",
      "Doa Syafaat",
      "Doa Persembahan",
      "Pengantar Persembahan",
      "Doa Penutup"
    ],
    FAMILY: [
      "MC/WL",
      "Pengkhotbah",
      "Doa Syafaat",
      "Doa Persembahan",
      "Pengantar Persembahan",
      "Doa Penutup"
    ],
    SUNDAY_SCHOOL: []
  },

  // Struktur Pemusik per Jenis Ibadah
  MUSICIANS: {
    SUNDAY: ["Pianis", "Drummer", "Bass", "Gitaris"],
    YOUTH: ["Pianis", "Drummer", "Bass", "Gitaris"],
    PRAYER: ["Pianis", "Drummer", "Bass", "Gitaris"],
    FAMILY: ["Gitaris"],
    SUNDAY_SCHOOL: ["Pianis", "Drummer", "Bass", "Gitaris"]
  },

  // Perlengkapan (hanya untuk Ibadah Minggu)
  EQUIPMENT: {
    SUNDAY: ["Soundman", "Multimedia"]
  },

  // Penari Tamborin (hanya untuk Ibadah Minggu)
  TAMBOURINE_DANCERS: {
    SUNDAY: ["Penari 1", "Penari 2", "Penari 3", "Penari 4"]
  },

  // Pengajar (untuk Sekolah Minggu)
  TEACHERS: {
    SUNDAY_SCHOOL: ["Pengajar Kelas Besar", "Pengajar Kelas Kecil"]
  },

  // Icon untuk Pelayan Altar
  ALTAR_ICONS: {
    "MC/WL": "🎤",
    "Pengkhotbah": "📖",
    "Liturgos": "✝️",
    "Doa Syafaat": "🙏",
    "Doa Persembahan": "💝",
    "Pengantar Persembahan": "👫",
    "Doa Berkat": "✨",
    "Doa Penutup": "🌟",
    "Pianis": "🎹",
    "Drummer": "🥁",
    "Bass": "🎸",
    "Gitaris": "🎸",
    "Soundman": "🔊",
    "Multimedia": "📺",
    "Pengajar Kelas Besar": "👨‍🏫",
    "Pengajar Kelas Kecil": "👩‍🏫"
  },

  // Warna Tema Modern
  COLORS: {
    PRIMARY: "#6366F1",
    SECONDARY: "#8B5CF6",
    SUCCESS: "#10B981",
    WARNING: "#F59E0B",
    DANGER: "#EF4444",
    INFO: "#3B82F6",
    LIGHT: "#F3F4F6",
    DARK: "#1F2937",
    WHITE: "#FFFFFF"
  },

  // Nama Sheet
  SHEET_NAMES: {
    SUNDAY: "Ibadah Minggu",
    YOUTH: "Ibadah Pemuda",
    PRAYER: "Persekutuan Doa",
    FAMILY: "Ibadah Rumah Tangga",
    SUNDAY_SCHOOL: "Sekolah Minggu",
    SETTINGS: "Pengaturan"
  }
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
