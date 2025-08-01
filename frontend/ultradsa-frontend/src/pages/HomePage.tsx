import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

type Question = {
    id : string;
    title : string;
    level : 'Very Easy' | 'Easy' | 'Medium' | 'Hard';
    category : string;
};
const dummyQuestions: Question[] = [
    {
        id: '001',
        title: 'Two Sum',
        level: 'Easy',
        category: 'Array' 
    },
    {
        id: '002',
        title: 'Reverse Linked List',
        level: 'Medium',
        category: 'Linked List'
    },
    {
        id: '003',
        title: 'Valid Parentheses',
        level: 'Very Easy',
        category: 'Stack'
    },
];
const HomePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Questions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyQuestions.map((q) => (
          <Link to={`/question/${q.id}`} key={q.id}>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{q.title}</CardTitle>
                <Badge
                  className={
                    q.level === 'Very Easy'
                      ? 'bg-green-100 text-green-700'
                      : q.level === 'Easy'
                      ? 'bg-blue-100 text-blue-700'
                      : q.level === 'Medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }
                >
                  {q.level}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500">{q.category}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;