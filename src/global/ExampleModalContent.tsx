import { Button, Input, Text } from '../components';

import { ReactComponent as TicketSVG } from '../assets/ticket_20.svg';

export default function ExampleModalContent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <Input
        icon={TicketSVG}
        placeholder="Search Items..."
        style={{
          width: '100%',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text priority="low">
          © {new Date().getFullYear()} Awesome Item Search Engine
        </Text>
        <Button priority="high" color="primary">
          Search
        </Button>
      </div>
    </div>
  );
}
