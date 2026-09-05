# توثيق ملف الأذان

الملف المرفق في `public/audio/adhan.wav` ونسخة iOS في `ios/App/App/public/audio/adhan.wav` هو تحويل أحادي القناة بمعدل 44.1kHz من ملف **Beautiful adhan.ogg** المنشور على Wikimedia Commons.

- المصدر: https://commons.wikimedia.org/wiki/File:Beautiful_adhan.ogg
- المؤلف المذكور في صفحة المصدر: Adam-synagda
- الترخيص: Creative Commons CC0 1.0 Universal Public Domain Dedication
- رابط الملف الأصلي: https://upload.wikimedia.org/wikipedia/commons/b/b0/Beautiful_adhan.ogg
- لا يُنسب التسجيل إلى عبد الباسط عبد الصمد أو أي مؤذن آخر؛ لأن صفحة المصدر لا تثبت ذلك.
- SHA-256 لملف WAV المضمّن: `88666e52fbe7dbd27afea5df23835f2dacb8aad15a68b4ba4c6694ac155f0d97`

تم اختيار هذا الملف لأنه يسمح بإعادة الاستخدام والتوزيع داخل التطبيق دون ادعاء نسبة غير موثقة.

## مصدر التفسير

التفسير المضمّن عند الطلب من مصدر `spa5k/tafsir_api`، وهو مشروع مفتوح المصدر يعرض نسخًا من مصادر تفسيرية محددة:

- تفسير السعدي: `ar-tafseer-al-saddi`
- تفسير ابن كثير: `ar-tafsir-ibn-kathir`
- واجهة المصدر: https://github.com/spa5k/tafsir_api
- لا يستخدم زر تفسير الآية Gemini ولا يولّد نصًا جديدًا؛ بل ينقل النص من المصدر المحدد ويعرض اسم المرجع.

ينبغي مراجعة شروط المصدر وحقوق النشر قبل النشر التجاري الواسع، والإبقاء على روابط المصدر داخل التطبيق أو صفحة التوثيق.

## فحص المشروع

بعد تثبيت الحزم، شغّل:

```bash
npm install
npm run lint
npm run build
npx cap sync ios
```

لا يمكن إصدار IPA موقّع من بيئة Ubuntu؛ يلزم Xcode على macOS وحساب Apple Developer للتوقيع.

للتفسير داخل التطبيق يلزم اتصال بالإنترنت عند أول جلب، ويمكن إضافة تخزين محلي للنتائج لاحقًا لدعم القراءة دون اتصال.

ويظل مستشار الأسئلة أداة مساعدة لا جهة إفتاء؛ وقد تم تشديد تعليماته لذكر المصدر والامتناع عن الأحكام القطعية في المسائل الحساسة.
