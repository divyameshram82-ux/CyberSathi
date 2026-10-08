# CyberSathi Pre-Recorded Course Audio Architecture

Place pre-recorded module audio `.mp3` files in the following directory structure to automatically switch from the `SpeechSynthesis` fallback (`en-IN`, `hi-IN`, `mr-IN`) to studio `.mp3` playback:

```text
audio/
  course-1/              # Digital Shield for Senior Citizens & Elders
    module-1/
      english.mp3
      hindi.mp3
      marathi.mp3
    module-2/
      english.mp3
      hindi.mp3
      marathi.mp3
    module-3/
      english.mp3
      hindi.mp3
      marathi.mp3
    module-4/
      english.mp3
      hindi.mp3
      marathi.mp3
  course-2/              # Cyber Defense for Students & Job Seekers
    module-1..4/
      english.mp3 | hindi.mp3 | marathi.mp3
  course-3/              # Cybersecurity for Working Professionals & Remote Staff
    module-1..4/
      english.mp3 | hindi.mp3 | marathi.mp3
  course-4/              # Digital Safety for Women & Self-Help Groups (Bachat Gat)
    module-1..4/
      english.mp3 | hindi.mp3 | marathi.mp3
  course-5/              # Digital Krishi Suraksha for Farmers & Village Families
    module-1..4/
      english.mp3 | hindi.mp3 | marathi.mp3
```

Until `.mp3` files are placed at these paths, `js/courses.js` automatically uses sentence-chunked browser `SpeechSynthesis` (`en-IN`, `hi-IN`, `mr-IN`) with full **Play, Pause, Resume, Replay, Volume, and Progress** controls and explicitly labels the audio source as **`Generated Browser Speech (SpeechSynthesis Fallback)`**.
