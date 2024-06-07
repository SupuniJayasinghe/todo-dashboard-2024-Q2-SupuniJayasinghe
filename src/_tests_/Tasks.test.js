import { render, screen } from '@testing-library/react';
import Tasks from '../Components/Tasks';

describe('Tasks', () => {
  test('renders Tasks component', () => {
    render(<Tasks tasks={[]} />);
    expect(screen.getByText('Tasks')).toBeInTheDocument();
  });

  test('renders tasks', () => {
    const tasks = [
      { id: 1, completed: true, todo: 'Task 1', createdBy: 'User 1', priority: 'HIGH', createdAt: new Date() },
      { id: 2, completed: false, todo: 'Task 2', createdBy: 'User 2', priority: 'MEDIUM', createdAt: new Date() },
    ];

    render(<Tasks tasks={tasks} />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  test('renders correct status tooltips', () => {
    const tasks = [
      { id: 1, completed: true, todo: 'Task 1', createdBy: 'User 1', priority: 'HIGH', createdAt: new Date() },
      { id: 2, completed: false, todo: 'Task 2', createdBy: 'User 2', priority: 'MEDIUM', createdAt: new Date() },
    ];

    render(<Tasks tasks={tasks} />);

    expect(screen.getByLabelText('Task Completed')).toBeInTheDocument();
    expect(screen.getByLabelText('Task In Progress')).toBeInTheDocument();
  });

  test('renders correct priority colors', () => {
    const tasks = [
      { id: 1, completed: true, todo: 'Task 1', createdBy: 'User 1', priority: 'HIGH', createdAt: new Date() },
      { id: 2, completed: false, todo: 'Task 2', createdBy: 'User 2', priority: 'MEDIUM', createdAt: new Date() },
    ];

    render(<Tasks tasks={tasks} />);

    expect(screen.getByText('high')).toHaveStyle('color: #EB5757');
    expect(screen.getByText('medium')).toHaveStyle('color: #F2C94C');
  });
});