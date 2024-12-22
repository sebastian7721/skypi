import Foundation

let spellPack: [String: String] = [
    "clock": "https://www.swdescy.com/clock.js"
]

func download(url: String, fileName: String) {
    print("Downloading the file.")
    if let url = URL(string: url) {
        do {
            let data = try Data(contentsOf: url)
            let filePath = URL(fileURLWithPath: fileName)
            try data.write(to: filePath)
            print("File downloaded successfully to \(filePath.path)")
        } catch {
            print("Error downloading or saving the file: \(error)")
        }
    } else {
        print("Invalid URL")
    }
}

func read(fileName: String) {
    print("Reading the file.")
    if let content = try? String(contentsOfFile: fileName, encoding: .utf8) {
        print(content)
    } else {
        print("Error reading the file \(fileName)")
    }
}

func help() {
    print("Spell commands:")
    print(" - read: Read the file. - spell read [file]")
    print(" - download: Download the file. - spell download [url] [path]")
    print(" - help: Show this help message. - spell help")
    print(" - shortcut: Create a shortcut for a url. - spell shortcut [url] [name]")
}

func main() {
    let arguments = CommandLine.arguments
    
    if arguments.count > 3 {
        if arguments[1] == "download" {
            var url = arguments[2]
            if let mappedUrl = spellPack[url] {
                url = mappedUrl
            }
            let urlComponents = url.split(separator: "/")
            let fileName = "\(arguments[3])/\(urlComponents.last ?? "default.txt")"
            download(url: url, fileName: fileName)
        }
    }
    
    if arguments.count > 2 {
        if arguments[1] == "read" {
            read(fileName: arguments[2])
        }
    }
    
    if arguments.count > 1 {
        if arguments[1] == "help" {
            help()
        }
    }
}

main()
