// قائمة الأسئلة
const questions = [
    "هل أفر غت ما في ذمتك من الصلوات الواجبة؟",
    "هل أنت حريص على الاستيقاظ لصلاة الفجر؟",
    "هل تحاول السيطرة على حضور القلب في الصلاة؟",
    "هل تحرص على أداء الصلاة في اول وقتها؟",
     " هل تحرص على الأمر بالصلاة لمن حولك من الأهل والأولاد؟",
       "هل انت متأكد من صحة قراءة سورة الحمد والسور في الصلاة؟ "   ,

       "هل تواظب على التعقيبات وخصوصًا تسبيح الزهراء (ع)؟",
   "هل انت ملتزم بتقليد المرحع الأعلم الحق؟",
    "هل أديت ما في ذمتك من الصوم الواجب؟",

   "هل انت متأكد من صحة وضوئك وغسلك ؟",
   "هل تلتزم بغسل الجمعة لتكون كفارة لك من الجمعة للجمعة ؟",
   "هل وفيت بما عليك من يمين أو عهد أو نذر أو رد مظالم أو مجهول مالك ؟",
   " هل تقوم بواجب الأمر بالمعروف والنهي عن المنكر قدر المستطاع ؟",
   "هل تعيش حالة البراء من اعداء الله عُقدةً وسلوكا؟",

   "هل تتلو القرآن بشكل مستمر ؟",

    "هل انت ملتزم بسنة خمسيه مع الألتزام بما عليك ؟",
  

    "  هل تذكر موتاك وذي الحقوق عليك بالخيرات والصدقات ؟",
    "هل تحاول ان تؤدي صلاة الليل وتلتزم بأدائها ؟",
    "هل تفكر بصدقه جارية بعد وفاتك",
    "هل أوصيت بما عليك من الحقوق وكذلك الوصية بثُلث أموالك في سبيل الله؟",
    "هل تلتزم بترك الغيبة قولاً واستماعاً ",
    "هل تراقب الضوابط الشرعية في التعامل مع الجنس الآخر؟",
    "هل تجتنب الغناء والموسيقى المحرمة بكل أشكالها؟",
    "هل تجتنب الكذب في الجد والهزل",
    "هل تجتنب النظر إلى الصور المثيرة للشهوة أو النظر المحرم إلى النساء؟",
   "هل ابعدت عن منزلك كل ادوات ممارسة المنكر كالدومنة وغيرها ؟",
    "هل تحاول تجنب الحسد والحقد والتكبر ؟",
    "هل تمتنع عن الإسراف في الأكل والشرب والملبس؟",
    "هل تراعي حلية المأكل وخاصة مصادر اللحوم",
    "هل تتجنب الخواطر الخبيثة كالتفكير في الحرام ؟",
    "هل ارضيت والداك عنك؟",
    "هل تتجنب معاشرة اصدقاء السوء ؟",
    "هل تعيش حالة الاهتمام بالمسلمين وقضاء حوائجهم ؟",
   "هل ارضيت كل من اذيته بقول او فعل ؟",
   "هل تعلم احكام البلوغ ليتم مراعاتها لك ولأولادك ومن حولك ؟",
   "هل تراعي صلة الرحم بشكل مقبول ؟",
   "هل جيرانك راضون عنك ؟",
   "هل تعطِ عملك الدراسي أو الوظيفي او التجاري حقه ؟",
      "هل أنت منتظم في أسلوب حياتك وتتجنب حالة الفوضى بشكل عام؟",
    "هل تتجنب النوم الزائد عن حاجة البدن ؟",
    "هل تجتنب عدم التدخل في ما لا يعنيك ؟ ",
    "هل تتجنب الظهور بمظهر أعداء الدين او المذهب ",
    "هل لديك حد ادنى من مراجعة كتب الفقه والتفسير ؟",
    "هل قرأت ولو شيئا قليل عن حياة المعصومين ؟",
        "هل لك مكتبة إسلامية تحتوي كتبًا نافعة في بيتك؟",
        "هل تلتزم بالتوبة خاصة بعد ارتكاب الذنوب ؟",
        "هل تدعو لفرج صاحب الزمان ولو باليوم  مرة؟",
        "هل تعطي لمواسم العبادة حقها كليلة القدر وليلة الجمعة ؟",
  "هل تحس بمنو روحي الى الأحسان من خلال التفاعل في الدعاء والمناجاة ؟",
  "هل تسطير على نفسك عند المعصية ؟",
];

// متغيرات عامة
let answers = {};
let currentQuestionIndex = 0;

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    displayQuestions();
});

// عرض الأسئلة
function displayQuestions() {
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';
    
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <div class="question-text">${index + 1}. ${question}</div>
            <div class="answer-buttons">
                <button class="answer-btn yes" onclick="selectAnswer(${index}, 'yes', this)">نعم</button>
                <button class="answer-btn no" onclick="selectAnswer(${index}, 'no', this)">لا</button>
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

// اختيار الإجابة
function selectAnswer(questionIndex, answer, buttonElement) {
    answers[questionIndex] = answer;
    
    // إزالة التحديد من جميع الأزرار في هذا السؤال
    const questionDiv = buttonElement.closest('.question-item');
    const allButtons = questionDiv.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.classList.remove('selected'));
    
    // إضافة التحديد للزر المضغوط
    buttonElement.classList.add('selected');
    
    // تحديث شريط التقدم
    updateProgress();
    
    // إظهار زر "تم" إذا تم الإجابة على جميع الأسئلة
    if (Object.keys(answers).length === questions.length) {
        document.getElementById('submitBtn').style.display = 'block';
        document.getElementById('submitBtn').scrollIntoView({ behavior: 'smooth' });
    }
}

// تحديث شريط التقدم
function updateProgress() {
    const progress = (Object.keys(answers).length / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = Object.keys(answers).length;
}

// حساب النتائج
function calculateResults() {
    if (Object.keys(answers).length !== questions.length) {
        alert('يرجى الإجابة على جميع الأسئلة قبل المتابعة');
        return;
    }
    
    let score = 0;
    let negativeAnswers = [];
    
    // حساب النقاط بناءً على عدد الإجابات "نعم"
    for (let i = 0; i < questions.length; i++) {
        if (answers[i] === 'yes') {
            score += 1; // كل إجابة نعم تساوي نقطة واحدة
        } else if (answers[i] === 'no') {
            negativeAnswers.push({
                index: i + 1,
                question: questions[i]
            });
        }
    }
    
    // تحويل الدرجة إلى نسبة مئوية من 100
    score = (score / questions.length) * 100;
    
    // تقريب النتيجة إلى أقرب عدد صحيح
    score = Math.round(score);
    
    // عرض النتائج
    displayResults(score, negativeAnswers);
}


// عرض النتائج
function displayResults(score, negativeAnswers) {
    // إخفاء الاختبار وإظهار النتائج
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    
    // عرض النتيجة
    document.getElementById('finalScore').textContent = score;
    
    // تفسير النتيجة
    const interpretation = getScoreInterpretation(score);
    document.getElementById('scoreInterpretation').innerHTML = interpretation;
    
    // عرض الأسئلة التي تم الإجابة عنها بـ "لا"
    if (negativeAnswers.length > 0) {
        document.getElementById('negativeAnswers').style.display = 'block';
        const negativeList = document.getElementById('negativeList');
        negativeList.innerHTML = '';
        
        negativeAnswers.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.index}. ${item.question}`;
            negativeList.appendChild(li);
        });
    }
    
    // التمرير إلى النتائج
    document.getElementById('resultsContainer').scrollIntoView({ behavior: 'smooth' });
}

// تفسير النتيجة
function getScoreInterpretation(score) {
    if (score >= 90) {
        return `
            <div style="color: #22c55e; font-weight: bold;">
                <h3>ممتاز جداً! 🌟</h3>
                <p>أحسنت! أنت تتمتع بمستوى عالٍ من الالتزام الديني والأخلاقي. استمر على هذا الطريق المبارك.</p>
            </div>
        `;
    } else if (score >= 70) {
        return `
            <div style="color: #3b82f6; font-weight: bold;">
                <h3>جيد جداً! 👍</h3>
                <p>أداء جيد! لديك أساس قوي في الالتزام الديني. راجع النقاط التي تحتاج إلى تحسين واعمل على تطويرها.</p>
            </div>
        `;
    } else if (score >= 50) {
        return `
            <div style="color: #f59e0b; font-weight: bold;">
                <h3>متوسط 📈</h3>
                <p>هناك مجال للتحسن. راجع الأسئلة التي أجبت عنها بـ "لا" واعمل على تطوير هذه الجوانب في حياتك.</p>
            </div>
        `;
    } else {
        return `
            <div style="color: #ef4444; font-weight: bold;">
                <h3>يحتاج إلى تحسين 🤲</h3>
                <p>لا تيأس! هذا الاختبار فرصة للتأمل والتطوير. ابدأ بخطوات صغيرة واعمل على تحسين الجوانب المذكورة أدناه.</p>
            </div>
        `;
    }
}

// إعادة تشغيل الاختبار
function restartQuiz() {
    // إعادة تعيين المتغيرات
    answers = {};
    currentQuestionIndex = 0;
    
    // إعادة تعيين واجهة المستخدم
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';
    
    // إعادة تعيين شريط التقدم
    document.getElementById('progress').style.width = '0%';
    document.getElementById('currentQuestion').textContent = '0';
    
    // إزالة جميع التحديدات
    const allButtons = document.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.classList.remove('selected'));
    
    // التمرير إلى الأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

