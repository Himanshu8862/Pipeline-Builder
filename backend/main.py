from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI()

# Allow requests from the frontend (localhost:3000)
origins = [
    "http://localhost:3000",  # React development server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow the frontend domain
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(payload: dict = Body(...)):
    # Log the incoming request payload to see what we're receiving
    print("Received Payload:", payload)

    # Extract nodes and edges from the payload
    nodes = payload.get('nodes', [])
    edges = payload.get('edges', [])

    # Create a directed graph
    G = nx.DiGraph()

    # Add nodes and edges to the graph
    for node in nodes:
        G.add_node(node['id'])

    for edge in edges:
        G.add_edge(edge['source'], edge['target'])

    # Calculate the number of nodes and edges
    num_nodes = len(nodes)
    num_edges = len(edges)

    # Check if the graph is a Directed Acyclic Graph (DAG)
    is_dag = nx.is_directed_acyclic_graph(G)

    # Log the results before sending the response
    print(f"Number of Nodes: {num_nodes}, Number of Edges: {num_edges}, Is DAG: {is_dag}")

    # Return the result
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
