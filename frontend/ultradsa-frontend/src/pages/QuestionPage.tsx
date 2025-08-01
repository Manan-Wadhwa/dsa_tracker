const dummyQuestion = {
  title: 'Two Sum',
  level: 'Easy',
  category: 'Array',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  constraints: '1 <= nums.length <= 10^4',
  examples: [
    { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] == 9' },
    { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: 'nums[1] + nums[2] == 6' },
    { input: 'nums = [3,3], target = 6', output: '[0,1]', explanation: 'nums[0] + nums[1] == 6' },
  ],
};

const QuestionPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left: Question */}
      <div className="w-1/3 p-6 border-r overflow-y-auto">
        <h2 className="text-xl font-bold mb-2">{dummyQuestion.title}</h2>
        <div className="mb-2 text-sm font-semibold text-blue-600">{dummyQuestion.level} • {dummyQuestion.category}</div>
        <div className="mb-4 text-gray-700">{dummyQuestion.description}</div>
        <div className="mb-2 text-xs text-gray-500">Constraints: {dummyQuestion.constraints}</div>
      </div>
      {/* Right: Code + Results */}
      <div className="w-2/3 flex flex-col">
        {/* Top: Code Editor */}
        <div className="flex-1 p-6 border-b">
          <textarea
            className="w-full h-full border rounded p-2 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your code here..."
            defaultValue={`def two_sum(nums, target):\n    # Your code here\n    pass`}
          />
        </div>
        {/* Bottom: Test Cases & Output */}
        <div className="h-1/3 p-6 bg-gray-50 overflow-y-auto">
          <div className="mb-2 font-semibold">Example Test Cases</div>
          <div className="space-y-2 mb-4">
            {dummyQuestion.examples.map((ex, idx) => (
              <div
                key={idx}
                className={`p-2 rounded border ${idx === 1 ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'}`}
              >
                <div className="text-xs text-gray-500">Input: <span className="font-mono">{ex.input}</span></div>
                <div className="text-xs text-gray-500">Output: <span className="font-mono">{ex.output}</span></div>
                <div className="text-xs text-gray-400">{ex.explanation}</div>
                {idx === 1 && <div className="text-xs text-red-600 font-bold mt-1">Your code failed here</div>}
              </div>
            ))}
          </div>
          <div className="font-semibold mb-1">Compiler Output</div>
          <div className="p-2 bg-black text-green-400 rounded font-mono text-xs">Accepted</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;